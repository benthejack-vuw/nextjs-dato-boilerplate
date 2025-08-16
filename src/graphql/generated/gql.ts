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
    "fragment StructuredTextBlock on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on MediaAssetRecord {\n    ...MediaAssetComponent\n  }\n}\n\nfragment StructuredTextLinks on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n    _modelApiKey\n  }\n  ... on RootLevelPageRecord {\n    ...RootLevelPageLink\n  }\n}": typeof types.StructuredTextBlockFragmentDoc,
    "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n  ... on LinkCardGridRecord {\n    ...LinkCardGrid\n  }\n  ... on LinkRecord {\n    ...Link\n  }\n  ... on StructuredTextRecord {\n    ...StructuredText\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}": typeof types.DynamicComponentFragmentDoc,
    "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}": typeof types.GenericParagraphFragmentDoc,
    "fragment LinkCardGrid on LinkCardGridRecord {\n  title\n  links {\n    ... on RecordInterface {\n      id\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n  }\n}": typeof types.LinkCardGridFragmentDoc,
    "fragment MediaAssetComponent on MediaAssetRecord {\n  asset {\n    ...ResponsiveMediaAsset\n  }\n}": typeof types.MediaAssetComponentFragmentDoc,
    "fragment PageHeading on PageHeadingRecord {\n  copy\n}": typeof types.PageHeadingFragmentDoc,
    "fragment StructuredText on StructuredTextRecord {\n  text {\n    value\n    blocks {\n      ...StructuredTextBlock\n    }\n    links {\n      ...StructuredTextLinks\n    }\n  }\n}": typeof types.StructuredTextFragmentDoc,
    "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": typeof types.RootLevelPageFragmentDoc,
    "fragment RootLevelPageLink on RootLevelPageRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  slug\n}\n\nfragment InternalLink on InternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n}\n\nfragment OverridesInternalLink on OverridesInternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n}\n\nfragment ExternalLink on ExternalLinkRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  url\n}\n\nfragment Link on LinkRecord {\n  __typename\n  link {\n    ... on RecordInterface {\n      _modelApiKey\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n  }\n}": typeof types.RootLevelPageLinkFragmentDoc,
    "fragment Video on UploadVideoField {\n  muxPlaybackId\n  title\n  videoWidth: width\n  videoHeight: height\n  blurUpThumb\n  blurhash\n}\n\nfragment StaticImage on FileFieldInterface {\n  alt\n  url\n  blurUpThumb\n  width\n  height\n}\n\nfragment ResponsiveImage on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vw, 1300px\"\n    imgixParams: {fit: crop, w: 1300, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n}\n\nfragment ResponsiveMediaAsset on FileFieldInterface {\n  ...ResponsiveImage\n  ...StaticImage\n  video {\n    ...Video\n  }\n}\n\nfragment LinkMediaAsset on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vh, 1024px\"\n    imgixParams: {fit: crop, w: 1024, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n  ...StaticImage\n  video {\n    ...Video\n  }\n}": typeof types.VideoFragmentDoc,
};
const documents: Documents = {
    "fragment StructuredTextBlock on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on MediaAssetRecord {\n    ...MediaAssetComponent\n  }\n}\n\nfragment StructuredTextLinks on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n    _modelApiKey\n  }\n  ... on RootLevelPageRecord {\n    ...RootLevelPageLink\n  }\n}": types.StructuredTextBlockFragmentDoc,
    "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n  ... on LinkCardGridRecord {\n    ...LinkCardGrid\n  }\n  ... on LinkRecord {\n    ...Link\n  }\n  ... on StructuredTextRecord {\n    ...StructuredText\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}": types.DynamicComponentFragmentDoc,
    "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}": types.GenericParagraphFragmentDoc,
    "fragment LinkCardGrid on LinkCardGridRecord {\n  title\n  links {\n    ... on RecordInterface {\n      id\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n  }\n}": types.LinkCardGridFragmentDoc,
    "fragment MediaAssetComponent on MediaAssetRecord {\n  asset {\n    ...ResponsiveMediaAsset\n  }\n}": types.MediaAssetComponentFragmentDoc,
    "fragment PageHeading on PageHeadingRecord {\n  copy\n}": types.PageHeadingFragmentDoc,
    "fragment StructuredText on StructuredTextRecord {\n  text {\n    value\n    blocks {\n      ...StructuredTextBlock\n    }\n    links {\n      ...StructuredTextLinks\n    }\n  }\n}": types.StructuredTextFragmentDoc,
    "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}": types.RootLevelPageFragmentDoc,
    "fragment RootLevelPageLink on RootLevelPageRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  slug\n}\n\nfragment InternalLink on InternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n}\n\nfragment OverridesInternalLink on OverridesInternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n}\n\nfragment ExternalLink on ExternalLinkRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  url\n}\n\nfragment Link on LinkRecord {\n  __typename\n  link {\n    ... on RecordInterface {\n      _modelApiKey\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n  }\n}": types.RootLevelPageLinkFragmentDoc,
    "fragment Video on UploadVideoField {\n  muxPlaybackId\n  title\n  videoWidth: width\n  videoHeight: height\n  blurUpThumb\n  blurhash\n}\n\nfragment StaticImage on FileFieldInterface {\n  alt\n  url\n  blurUpThumb\n  width\n  height\n}\n\nfragment ResponsiveImage on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vw, 1300px\"\n    imgixParams: {fit: crop, w: 1300, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n}\n\nfragment ResponsiveMediaAsset on FileFieldInterface {\n  ...ResponsiveImage\n  ...StaticImage\n  video {\n    ...Video\n  }\n}\n\nfragment LinkMediaAsset on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vh, 1024px\"\n    imgixParams: {fit: crop, w: 1024, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n  ...StaticImage\n  video {\n    ...Video\n  }\n}": types.VideoFragmentDoc,
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
export function graphql(source: "fragment StructuredTextBlock on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on MediaAssetRecord {\n    ...MediaAssetComponent\n  }\n}\n\nfragment StructuredTextLinks on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n    _modelApiKey\n  }\n  ... on RootLevelPageRecord {\n    ...RootLevelPageLink\n  }\n}"): (typeof documents)["fragment StructuredTextBlock on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on MediaAssetRecord {\n    ...MediaAssetComponent\n  }\n}\n\nfragment StructuredTextLinks on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n    _modelApiKey\n  }\n  ... on RootLevelPageRecord {\n    ...RootLevelPageLink\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n  ... on LinkCardGridRecord {\n    ...LinkCardGrid\n  }\n  ... on LinkRecord {\n    ...Link\n  }\n  ... on StructuredTextRecord {\n    ...StructuredText\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}"): (typeof documents)["fragment DynamicComponent on RecordInterface {\n  ... on RecordInterface {\n    __typename\n    id\n  }\n  ... on PageHeadingRecord {\n    ...PageHeading\n  }\n  ... on GenericParagraphRecord {\n    ...GenericParagraph\n  }\n  ... on LinkCardGridRecord {\n    ...LinkCardGrid\n  }\n  ... on LinkRecord {\n    ...Link\n  }\n  ... on StructuredTextRecord {\n    ...StructuredText\n  }\n}\n\nfragment DynamicComponentCollection on DynamicComponentCollectionRecord {\n  components {\n    ...DynamicComponent\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}"): (typeof documents)["fragment GenericParagraph on GenericParagraphRecord {\n  copy\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LinkCardGrid on LinkCardGridRecord {\n  title\n  links {\n    ... on RecordInterface {\n      id\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n  }\n}"): (typeof documents)["fragment LinkCardGrid on LinkCardGridRecord {\n  title\n  links {\n    ... on RecordInterface {\n      id\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaAssetComponent on MediaAssetRecord {\n  asset {\n    ...ResponsiveMediaAsset\n  }\n}"): (typeof documents)["fragment MediaAssetComponent on MediaAssetRecord {\n  asset {\n    ...ResponsiveMediaAsset\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageHeading on PageHeadingRecord {\n  copy\n}"): (typeof documents)["fragment PageHeading on PageHeadingRecord {\n  copy\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment StructuredText on StructuredTextRecord {\n  text {\n    value\n    blocks {\n      ...StructuredTextBlock\n    }\n    links {\n      ...StructuredTextLinks\n    }\n  }\n}"): (typeof documents)["fragment StructuredText on StructuredTextRecord {\n  text {\n    value\n    blocks {\n      ...StructuredTextBlock\n    }\n    links {\n      ...StructuredTextLinks\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"): (typeof documents)["fragment RootLevelPage on RootLevelPageRecord {\n  title\n  slug\n  components {\n    ...DynamicComponentCollection\n  }\n}\n\nquery AllRootLevelPageSlugs {\n  allRootLevelPages {\n    slug\n  }\n}\n\nquery RootLevelPageBySlug($slug: String!) {\n  rootLevelPage(filter: {slug: {eq: $slug}}) {\n    ...RootLevelPage\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RootLevelPageLink on RootLevelPageRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  slug\n}\n\nfragment InternalLink on InternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n}\n\nfragment OverridesInternalLink on OverridesInternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n}\n\nfragment ExternalLink on ExternalLinkRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  url\n}\n\nfragment Link on LinkRecord {\n  __typename\n  link {\n    ... on RecordInterface {\n      _modelApiKey\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n  }\n}"): (typeof documents)["fragment RootLevelPageLink on RootLevelPageRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  slug\n}\n\nfragment InternalLink on InternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n}\n\nfragment OverridesInternalLink on OverridesInternalLinkRecord {\n  __typename\n  link {\n    _modelApiKey\n    ... on RootLevelPageRecord {\n      ...RootLevelPageLink\n    }\n  }\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n}\n\nfragment ExternalLink on ExternalLinkRecord {\n  __typename\n  title\n  subtitle\n  image {\n    ...LinkMediaAsset\n  }\n  url\n}\n\nfragment Link on LinkRecord {\n  __typename\n  link {\n    ... on RecordInterface {\n      _modelApiKey\n    }\n    ... on InternalLinkRecord {\n      ...InternalLink\n    }\n    ... on OverridesInternalLinkRecord {\n      ...OverridesInternalLink\n    }\n    ... on ExternalLinkRecord {\n      ...ExternalLink\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Video on UploadVideoField {\n  muxPlaybackId\n  title\n  videoWidth: width\n  videoHeight: height\n  blurUpThumb\n  blurhash\n}\n\nfragment StaticImage on FileFieldInterface {\n  alt\n  url\n  blurUpThumb\n  width\n  height\n}\n\nfragment ResponsiveImage on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vw, 1300px\"\n    imgixParams: {fit: crop, w: 1300, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n}\n\nfragment ResponsiveMediaAsset on FileFieldInterface {\n  ...ResponsiveImage\n  ...StaticImage\n  video {\n    ...Video\n  }\n}\n\nfragment LinkMediaAsset on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vh, 1024px\"\n    imgixParams: {fit: crop, w: 1024, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n  ...StaticImage\n  video {\n    ...Video\n  }\n}"): (typeof documents)["fragment Video on UploadVideoField {\n  muxPlaybackId\n  title\n  videoWidth: width\n  videoHeight: height\n  blurUpThumb\n  blurhash\n}\n\nfragment StaticImage on FileFieldInterface {\n  alt\n  url\n  blurUpThumb\n  width\n  height\n}\n\nfragment ResponsiveImage on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vw, 1300px\"\n    imgixParams: {fit: crop, w: 1300, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n}\n\nfragment ResponsiveMediaAsset on FileFieldInterface {\n  ...ResponsiveImage\n  ...StaticImage\n  video {\n    ...Video\n  }\n}\n\nfragment LinkMediaAsset on FileFieldInterface {\n  responsiveImage(\n    sizes: \"(max-width: 1024px) 100vh, 1024px\"\n    imgixParams: {fit: crop, w: 1024, auto: format}\n  ) {\n    sizes\n    src\n    width\n    height\n    alt\n    title\n    base64\n  }\n  ...StaticImage\n  video {\n    ...Video\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;