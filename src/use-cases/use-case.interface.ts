export interface UseCase<InputArgs extends Record<string, any>, Result> {
  execute(argsObj: InputArgs): Result;
}
