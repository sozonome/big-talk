import type {
  QueryDatabaseResponse,
  PageObjectResponse,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type DatabaseEntry = Extract<
  QueryDatabaseResponse["results"][number],
  { url: string }
>;

export declare type PostResult = Extract<
  GetDatabaseResponse,
  {
    url: string;
  }
>;

export declare type GetPagePropertyResponse =
  PageObjectResponse["properties"][string];
export declare type PropertyValueType = GetPagePropertyResponse["type"];

export declare type ExtractedPropertyValue<TType extends PropertyValueType> =
  Extract<
    GetPagePropertyResponse,
    {
      type: TType;
    }
  >;

export declare type PropertyValueTitle = ExtractedPropertyValue<"title">;
export declare type PropertyValueSelect = ExtractedPropertyValue<"select">;
