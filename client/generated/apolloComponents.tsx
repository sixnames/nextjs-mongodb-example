import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AssetItem = {
   __typename?: 'AssetItem';
  publicId: Scalars['String'];
  format: Scalars['String'];
  url: Scalars['String'];
  index: Scalars['Int'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type Assets = {
   __typename?: 'Assets';
  data: Array<AssetItem>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type CreateUserPayload = {
   __typename?: 'CreateUserPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};


export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Image = {
   __typename?: 'Image';
  url: Scalars['String'];
  width: Scalars['Int'];
  alt: Scalars['String'];
  title: Scalars['String'];
};


export type Mutation = {
   __typename?: 'Mutation';
  _?: Maybe<Scalars['String']>;
  createUser: CreateUserPayload;
  updateUser: UpdateUserPayload;
  deleteUser: DeleteUserPayload;
  signUp: SignUpPayload;
  signIn: SignInPayload;
  signOut?: Maybe<SignOutPayload>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};

export type Query = {
   __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  getUser?: Maybe<User>;
  getAllUsers: UsersPaginationPayload;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetAllUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortDir?: Maybe<SortDirection>;
  sortBy?: Maybe<SortableUserField>;
  query?: Maybe<Scalars['String']>;
};

export enum RoleType {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Manager = 'MANAGER',
  Super = 'SUPER',
  Logistician = 'LOGISTICIAN',
  Contractor = 'CONTRACTOR',
  Driver = 'DRIVER',
  Helper = 'HELPER',
  Bookkeeper = 'BOOKKEEPER',
  Warehouse = 'WAREHOUSE',
  Stage = 'STAGE'
}

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInPayload = {
   __typename?: 'SignInPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export type SignOutPayload = {
   __typename?: 'SignOutPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type SignUpPayload = {
   __typename?: 'SignUpPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export enum SortableUserField {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  LastName = 'lastName',
  SecondName = 'secondName',
  Phone = 'phone',
  Role = 'role',
  CreatedAt = 'createdAt'
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
   __typename?: 'Subscription';
  _?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
};

export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};


export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  itemId: Scalars['Int'];
  name: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  shortName: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isCustomer: Scalars['Boolean'];
  isSuper: Scalars['Boolean'];
  isContractor: Scalars['Boolean'];
  isDriver: Scalars['Boolean'];
  isHelper: Scalars['Boolean'];
  isBookkeeper: Scalars['Boolean'];
  isWarehouse: Scalars['Boolean'];
  isLogistician: Scalars['Boolean'];
  isManager: Scalars['Boolean'];
  isStage: Scalars['Boolean'];
};

export type UsersPaginationPayload = {
   __typename?: 'UsersPaginationPayload';
  docs: Array<User>;
  totalDocs: Scalars['Int'];
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  totalPages: Scalars['Int'];
  pagingCounter?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

