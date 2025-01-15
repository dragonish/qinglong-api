// required for declare global to work
export {};

export interface EnvItem {
  /** Environment ID */
  id: number;
  /** Environment name */
  name: string;
  /** Environment value */
  value: string;
  /** Remarks */
  remarks: string;
  /** Status */
  status: number;
  /** Position */
  potition: number;
}

export interface Response {
  /** Response code */
  code: number;
  /** Response message */
  message: string;
}

export interface EnvResponse extends Response {
  /** Environment */
  data: EnvItem;
}

export interface EnvsResponse extends Response {
  /** Environment list */
  data: EnvItem[];
}

export interface GetEnvsRequest {
  /** Search keyword */
  searchValue: string;
}

export interface CreateEnvRequest {
  /** Array of environments to create */
  envs: EnvItem[];
}

export interface UpdateEnvRequest {
  /** Environment to update */
  env: EnvItem;
}

export interface DeleteEnvsRequest {
  /** Array of environment IDs to delete */
  ids: number[];
}

export interface MoveEnvRequest {
  /** Environment ID */
  id: number;
  /** Original position */
  fromIndex: number;
  /** Target position */
  toIndex: number;
}

export interface DisableEnvsRequest {
  /** Array of environment IDs to disable */
  ids: number[];
}

export interface EnableEnvsRequest {
  /** Array of environment IDs to enable */
  ids: number[];
}

export interface UpdateEnvNamesRequest {
  /** Array of environment IDs */
  ids: number[];
  /** New name to set */
  name: string;
}

export interface GetEnvByIdRequest {
  /** Environment ID */
  id: number;
}

export interface SystemNotifyRequest {
  /** Notification title */
  title: string;
  /** Notification content */
  content: string;
}

/** Retrieves a list of environments */
export type GetEnvs = (request: GetEnvsRequest) => Promise<EnvsResponse>;

/** Creates new environments */
export type CreateEnv = (request: CreateEnvRequest) => Promise<EnvsResponse>;

/** Updates an existing environment */
export type UpdateEnv = (request: UpdateEnvRequest) => Promise<EnvResponse>;

/** Deletes specified environments */
export type DeleteEnv = (request: DeleteEnvsRequest) => Promise<Response>;

/** Moves an environment to a different position */
export type MoveEnv = (request: MoveEnvRequest) => Promise<EnvResponse>;

/** Disables specified environments */
export type DisableEnvs = (request: DisableEnvsRequest) => Promise<Response>;

/** Enables specified environments */
export type EnableEnvs = (request: EnableEnvsRequest) => Promise<Response>;

/** Updates names for specified environments */
export type UpdateEnvNames = (request: UpdateEnvNamesRequest) => Promise<Response>;

/** Retrieves an environment by its ID */
export type GetEnvById = (request: GetEnvByIdRequest) => Promise<EnvResponse>;

/** Sends system notifications */
export type SystemNotify = (request: SystemNotifyRequest) => Promise<Response>;

declare global {
  /** built-in APIs entry point */
  class QLAPI {
    /** Retrieves a list of environments */
    static getEnvs: GetEnvs;
    /** Creates new environments */
    static createEnv: CreateEnv;
    /** Updates an existing environment */
    static updateEnv: UpdateEnv;
    /** Deletes specified environments */
    static deleteEnv: DeleteEnv;
    /** Moves an environment to a different position */
    static moveEnv: MoveEnv;
    /** Disables specified environments */
    static disableEnvs: DisableEnvs;
    /** Enables specified environments */
    static enableEnvs: EnableEnvs;
    /** Updates names for specified environments */
    static updateEnvNames: UpdateEnvNames;
    /** Retrieves an environment by its ID */
    static getEnvById: GetEnvById;
    /** Sends system notifications */
    static systemNotify: SystemNotify;
  }
}
