import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  SortDirection: SortDirection,
  SortableUserField: SortableUserField,
  UsersPaginationPayload: ResolverTypeWrapper<UsersPaginationPayload>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateUserInput: CreateUserInput,
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>,
  UpdateUserInput: UpdateUserInput,
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>,
  DeleteUserInput: DeleteUserInput,
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>,
  SignUpInput: SignUpInput,
  SignUpPayload: ResolverTypeWrapper<SignUpPayload>,
  SignInInput: SignInInput,
  SignInPayload: ResolverTypeWrapper<SignInPayload>,
  SignOutPayload: ResolverTypeWrapper<SignOutPayload>,
  Subscription: ResolverTypeWrapper<{}>,
  RoleType: RoleType,
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>,
  Image: ResolverTypeWrapper<Image>,
  AssetItem: ResolverTypeWrapper<AssetItem>,
  Assets: ResolverTypeWrapper<Assets>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  User: User,
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  DateTime: Scalars['DateTime'],
  Boolean: Scalars['Boolean'],
  SortDirection: SortDirection,
  SortableUserField: SortableUserField,
  UsersPaginationPayload: UsersPaginationPayload,
  Mutation: {},
  CreateUserInput: CreateUserInput,
  CreateUserPayload: CreateUserPayload,
  UpdateUserInput: UpdateUserInput,
  UpdateUserPayload: UpdateUserPayload,
  DeleteUserInput: DeleteUserInput,
  DeleteUserPayload: DeleteUserPayload,
  SignUpInput: SignUpInput,
  SignUpPayload: SignUpPayload,
  SignInInput: SignInInput,
  SignInPayload: SignInPayload,
  SignOutPayload: SignOutPayload,
  Subscription: {},
  RoleType: RoleType,
  JSONObject: Scalars['JSONObject'],
  Image: Image,
  AssetItem: AssetItem,
  Assets: Assets,
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AssetItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetItem'] = ResolversParentTypes['AssetItem']> = {
  publicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  format?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assets'] = ResolversParentTypes['Assets']> = {
  data?: Resolver<Array<ResolversTypes['AssetItem']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createUser?: Resolver<ResolversTypes['CreateUserPayload'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>,
  updateUser?: Resolver<ResolversTypes['UpdateUserPayload'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>,
  deleteUser?: Resolver<ResolversTypes['DeleteUserPayload'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>,
  signUp?: Resolver<ResolversTypes['SignUpPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>,
  signIn?: Resolver<ResolversTypes['SignInPayload'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>,
  signOut?: Resolver<Maybe<ResolversTypes['SignOutPayload']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>,
  getAllUsers?: Resolver<ResolversTypes['UsersPaginationPayload'], ParentType, ContextType, RequireFields<QueryGetAllUsersArgs, 'limit' | 'page' | 'sortDir' | 'sortBy'>>,
};

export type SignInPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInPayload'] = ResolversParentTypes['SignInPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SignOutPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignOutPayload'] = ResolversParentTypes['SignOutPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SignUpPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUpPayload'] = ResolversParentTypes['SignUpPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_", ParentType, ContextType>,
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  secondName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isCustomer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isSuper?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isContractor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDriver?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isHelper?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isBookkeeper?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isWarehouse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLogistician?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isManager?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isStage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UsersPaginationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPaginationPayload'] = ResolversParentTypes['UsersPaginationPayload']> = {
  docs?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  totalDocs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pagingCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasPrevPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  AssetItem?: AssetItemResolvers<ContextType>,
  Assets?: AssetsResolvers<ContextType>,
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>,
  Image?: ImageResolvers<ContextType>,
  JSONObject?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SignInPayload?: SignInPayloadResolvers<ContextType>,
  SignOutPayload?: SignOutPayloadResolvers<ContextType>,
  SignUpPayload?: SignUpPayloadResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UsersPaginationPayload?: UsersPaginationPayloadResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
