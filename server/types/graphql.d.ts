import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { User, Message, Chat } from "../db";
import { MyContext } from "../context";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: Date;
};

export type Chat = {
  __typename?: "Chat";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  lastMessage?: Maybe<Message>;
  messages: MessagesResult;
  participants: Array<User>;
};

export type ChatMessagesArgs = {
  limit: Scalars["Int"];
  after?: Maybe<Scalars["Float"]>;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  chat?: Maybe<Chat>;
  sender?: Maybe<User>;
  recipient?: Maybe<User>;
  isMine: Scalars["Boolean"];
};

export type MessagesResult = {
  __typename?: "MessagesResult";
  cursor?: Maybe<Scalars["Float"]>;
  hasMore: Scalars["Boolean"];
  messages: Array<Message>;
};

export type Mutation = {
  __typename?: "Mutation";
  addMessage?: Maybe<Message>;
  addChat?: Maybe<Chat>;
  removeChat?: Maybe<Scalars["ID"]>;
  _dummy?: Maybe<Scalars["Boolean"]>;
  signIn?: Maybe<User>;
  signUp?: Maybe<User>;
};

export type MutationAddMessageArgs = {
  chatId: Scalars["ID"];
  content: Scalars["String"];
};

export type MutationAddChatArgs = {
  recipientId: Scalars["ID"];
};

export type MutationRemoveChatArgs = {
  chatId: Scalars["ID"];
};

export type MutationSignInArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  name: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
  passwordConfirm: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  chats: Array<Chat>;
  chat?: Maybe<Chat>;
  _dummy?: Maybe<Scalars["Boolean"]>;
  me?: Maybe<User>;
  users: Array<User>;
};

export type QueryChatArgs = {
  chatId: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  messageAdded: Message;
  chatAdded: Chat;
  chatRemoved: Scalars["ID"];
  _dummy?: Maybe<Scalars["Boolean"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  picture?: Maybe<Scalars["String"]>;
};
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Chat: ResolverTypeWrapper<Chat>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Message: ResolverTypeWrapper<Message>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  MessagesResult: ResolverTypeWrapper<
    Omit<MessagesResult, "messages"> & {
      messages: Array<ResolversTypes["Message"]>;
    }
  >;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Chat: Chat;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Message: Message;
  DateTime: Scalars["DateTime"];
  User: User;
  Boolean: Scalars["Boolean"];
  Int: Scalars["Int"];
  Float: Scalars["Float"];
  MessagesResult: Omit<MessagesResult, "messages"> & {
    messages: Array<ResolversTypes["Message"]>;
  };
  Mutation: {};
  Subscription: {};
}>;

export type ChatResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["Chat"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastMessage?: Resolver<
    Maybe<ResolversTypes["Message"]>,
    ParentType,
    ContextType
  >;
  messages?: Resolver<
    ResolversTypes["MessagesResult"],
    ParentType,
    ContextType,
    ChatMessagesArgs
  >;
  participants?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
}>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MessageResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["Message"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  chat?: Resolver<Maybe<ResolversTypes["Chat"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
}>;

export type MessagesResultResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["MessagesResult"]
> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  messages?: Resolver<
    Array<ResolversTypes["Message"]>,
    ParentType,
    ContextType
  >;
}>;

export type MutationResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  addMessage?: Resolver<
    Maybe<ResolversTypes["Message"]>,
    ParentType,
    ContextType,
    MutationAddMessageArgs
  >;
  addChat?: Resolver<
    Maybe<ResolversTypes["Chat"]>,
    ParentType,
    ContextType,
    MutationAddChatArgs
  >;
  removeChat?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType,
    MutationRemoveChatArgs
  >;
  _dummy?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  signIn?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    MutationSignInArgs
  >;
  signUp?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    MutationSignUpArgs
  >;
}>;

export type QueryResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["Query"]
> = ResolversObject<{
  chats?: Resolver<Array<ResolversTypes["Chat"]>, ParentType, ContextType>;
  chat?: Resolver<
    Maybe<ResolversTypes["Chat"]>,
    ParentType,
    ContextType,
    QueryChatArgs
  >;
  _dummy?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
}>;

export type SubscriptionResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["Subscription"]
> = ResolversObject<{
  messageAdded?: SubscriptionResolver<
    ResolversTypes["Message"],
    ParentType,
    ContextType
  >;
  chatAdded?: SubscriptionResolver<
    ResolversTypes["Chat"],
    ParentType,
    ContextType
  >;
  chatRemoved?: SubscriptionResolver<
    ResolversTypes["ID"],
    ParentType,
    ContextType
  >;
  _dummy?: SubscriptionResolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
}>;

export type UserResolvers<
  ContextType = MyContext,
  ParentType = ResolversParentTypes["User"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Chat?: ChatResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  MessagesResult?: MessagesResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
