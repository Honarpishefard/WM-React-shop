export const SideBar = ({ sec1, sec2, sec3 }) => {
  return (
    <>
      <div className="mb-4 border-gray-200 dark:border-gray-700 pt-5 border-r w-1/5">
        <ul
          className="flex flex-col -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id={`${sec1}-tab`}
              data-tabs-target={`#${sec1}`}
              type="button"
              role="tab"
              aria-controls={sec1}
              aria-selected="false"
            >
              {sec1}
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id={`${sec2}-tab`}
              data-tabs-target={`#${sec2}`}
              type="button"
              role="tab"
              aria-controls={sec2}
              aria-selected="false"
            >
              {sec2}
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id={`${sec3}-tab`}
              data-tabs-target={`#${sec3}`}
              type="button"
              role="tab"
              aria-controls={sec3}
              aria-selected="false"
            >
              {sec3}
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id={sec1}
          role="tabpanel"
          aria-labelledby={`${sec1}-tab`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id={sec2}
          role="tabpanel"
          aria-labelledby={`${sec2}-tab`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id={sec3}
          role="tabpanel"
          aria-labelledby={`${sec3}-tab`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
};
