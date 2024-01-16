export interface UseCase<InputArgs extends Record<string, any>, Result> {
  execute(argsObj: InputArgs): Result;
}

export type UseCaseClass<InputArgs extends Record<string, any>, Result> = new (
  ...args: unknown[]
) => UseCase<InputArgs, Result>;
