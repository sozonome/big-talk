import { Client } from "@notionhq/client";
import {
  SelectPropertyValue,
  TitlePropertyValue,
} from "@notionhq/client/build/src/api-types";
import { NextApiRequest, NextApiResponse } from "next";

import { NOTION_DATABASE_ID, NOTION_KEY } from "constants/notion";
import { BigTalkQuestion } from "types/question";

// https://stackoverflow.com/a/65760948
export const fetchQuestions = async () => {
  const notion = new Client({
    auth: NOTION_KEY,
  });

  const result: Array<BigTalkQuestion> = [];

  await notion.databases
    .query({
      database_id: NOTION_DATABASE_ID,
    })
    .then((dbRes) => {
      result.push(
        ...dbRes.results.map((pageResult) => ({
          title:
            (pageResult.properties.Title as TitlePropertyValue).title[0]
              .plain_text ?? "",
          type: (pageResult.properties.Tags as SelectPropertyValue).select
            ?.name,
          color: (pageResult.properties.Color as SelectPropertyValue).select
            ?.name,
        }))
      );
    });

  return result;
};

const questions = async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(await fetchQuestions());
};

export default questions;
