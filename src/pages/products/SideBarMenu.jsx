export const SideBarMenu = ({ children }) => {
  return (
    <div className="md:hidden">
      {/* <!-- drawer init and show --> */}
      <div className="text-center">
        <button className="dark:text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-gray-700 focus:outline-none"
          type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 12 16" className="h-6 w-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div id="drawer-navigation" className="fixed h-full top-0 left-0 z-40 w-64 p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
