import { Method } from 'axios';

interface Props<T> {
  url: string;
  method: Method;
  onSuccess?: (data: T) => void | Promise<void>;
  onFailure?: (e: unknown) => void | Promise<void>;
  successMessage?: string;
  errorMessage?: { [status: number]: string };
}

export default Props;