import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { NOTION_DATABASE_ID, NOTION_KEY } from "constants/notion";
import type {
  DatabaseEntry,
  PropertyValueSelect,
  PropertyValueTitle,
} from "services/notion/types";
import type { FetchQuestionsResponse } from "types/question";

// https://stackoverflow.com/a/65760948
export const fetchQuestions = async () => {
  const notion = new Client({
    auth: NOTION_KEY,
  });

  const result: FetchQuestionsResponse = {
    questions: [],
    lastUpdated: "",
  };

  await notion.databases
    .query({
      database_id: NOTION_DATABASE_ID,
    })
    .then((dbRes) => {
      result.questions.push(
        ...dbRes.results.map((pageResult) => ({
          title:
            (
              (pageResult as DatabaseEntry).properties
                .Title as PropertyValueTitle
            ).title[0].plain_text ?? "",
          type:
            (
              (pageResult as DatabaseEntry).properties
                .Tags as PropertyValueSelect
            ).select?.name ?? null,
          color:
            (
              (pageResult as DatabaseEntry).properties
                .Color as PropertyValueSelect
            ).select?.name ?? null,
        }))
      );
    });
  await notion.databases
    .retrieve({ database_id: NOTION_DATABASE_ID })
    .then((retDbRes) => {
      result.lastUpdated = (retDbRes as DatabaseEntry).last_edited_time;
    });

  return result;
};

const questions = async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(await fetchQuestions());
};

export default questions;
