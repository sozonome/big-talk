import { Client } from "@notionhq/client";
import type {
  SelectPropertyValue,
  TitlePropertyValue,
} from "@notionhq/client/build/src/api-types";
import type { NextApiRequest, NextApiResponse } from "next";

import { NOTION_DATABASE_ID, NOTION_KEY } from "constants/notion";
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
            (pageResult.properties.Title as TitlePropertyValue).title[0]
              .plain_text ?? "",
          type:
            (pageResult.properties.Tags as SelectPropertyValue).select?.name ??
            null,
          color:
            (pageResult.properties.Color as SelectPropertyValue).select?.name ??
            null,
        }))
      );
    });
  await notion.databases
    .retrieve({ database_id: NOTION_DATABASE_ID })
    .then((retDbRes) => {
      result.lastUpdated = retDbRes.last_edited_time;
    });

  return result;
};

const questions = async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(await fetchQuestions());
};

export default questions;
