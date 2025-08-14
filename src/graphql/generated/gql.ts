/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query AllPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery PageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": typeof types.AllPageSlugsDocument,
    "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}": typeof types.DynamicComponentFragmentDoc,
    "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}": typeof types.GenericParagraphFragmentDoc,
    "fragment PageHeading on PageHeadingRecord {\n  copy\n}": typeof types.PageHeadingFragmentDoc,
    "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": typeof types.RootLevelPageFragmentDoc,
};
const documents: Documents = {
    "query AllPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery PageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": types.AllPageSlugsDocument,
    "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}": types.DynamicComponentFragmentDoc,
    "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}": types.GenericParagraphFragmentDoc,
    "fragment PageHeading on PageHeadingRecord {\n  copy\n}": types.PageHeadingFragmentDoc,
    "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": types.RootLevelPageFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery PageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"): (typeof documents)["query AllPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery PageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}"): (typeof documents)["fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}"): (typeof documents)["fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageHeading on PageHeadingRecord {\n  copy\n}"): (typeof documents)["fragment PageHeading on PageHeadingRecord {\n  copy\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"): (typeof documents)["fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;