import React, { ReactNode, useEffect } from "react";

/**
 * Allows the setting of the page title in the <Head /> element
 *
 * @param {string} pageTitle - The title of the page
 * @returns {React.ReactElement} - The returned element
 */
export default function Container({
  pageTitle,
  children
}: {
  pageTitle?: string;
  children: ReactNode;
}): JSX.Element {
  useEffect(() => {
    document.title = pageTitle || "Cameron Clark";
  }, [pageTitle]);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
