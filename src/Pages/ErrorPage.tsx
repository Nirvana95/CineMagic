import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : JSON.stringify(error)}
      </p>
    </div>
  );
}

export default ErrorPage;
