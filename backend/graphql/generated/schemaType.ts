export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Obj : Object
};

export type InputQuestionaireType = {
  label: Scalars['String'];
  answer_type: Scalars['Int'];
  answer: Scalars['Obj'];
};

export type InputUserType = {
  email: Scalars['String'];
  pasword: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuestionaire?: Maybe<Questionaire>;
  createUser?: Maybe<User>;
  deleteQuestionaire?: Maybe<Questionaire>;
  deleteUser?: Maybe<User>;
  updateQuestionaire?: Maybe<Questionaire>;
  updateUser?: Maybe<User>;
};


export type MutationCreateQuestionaireArgs = {
  body: InputQuestionaireType;
};


export type MutationCreateUserArgs = {
  body: InputUserType;
};


export type MutationDeleteQuestionaireArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationUpdateQuestionaireArgs = {
  _id: Scalars['ID'];
  body: InputQuestionaireType;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  body: InputUserType;
};

export type Questionaire = {
  _id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  answer_type?: Maybe<Scalars['Int']>;
  answer?: Maybe<Scalars['Obj']>;
};

export type Query = {
  __typename?: 'Query';
  listQuestionaire?: Maybe<QuestionaireEdgesType>;
  listUser?: Maybe<UserEdgesType>;
  readQuestionaire?: Maybe<Questionaire>;
  readUser?: Maybe<User>;
  searchQuestionaire?: Maybe<Array<Maybe<Questionaire>>>;
  searchUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryListPlaceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryListReviewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryListUserArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryReadPlaceArgs = {
  _id: Scalars['ID'];
};


export type QueryReadReviewArgs = {
  _id: Scalars['ID'];
};


export type QueryReadUserArgs = {
  _id: Scalars['ID'];
};


export type QueryReviewByUserArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QuerySearchPlaceArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchReviewArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchUserArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type User = {
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserEdgesType = {
  __typename?: 'UserEdgesType';
  edges?: Maybe<Array<Maybe<User>>>;
};

export type QuestionaireEdgesType = {
  __typename?: 'QuestionaireEdgesType';
  edges?: Maybe<Array<Maybe<Questionaire>>>;
};
