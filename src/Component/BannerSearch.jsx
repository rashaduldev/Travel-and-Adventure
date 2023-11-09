

const BannerSearch = () => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400 italic">Designation</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400 italic">Type</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400 italic">When</th>
              <th scope="col" className=" py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400 italic">Guest</th>
              <th scope="col" className=" py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400 italic"></th>
            </tr>
            <tr>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td> */}
              <td><label htmlFor="input-email-label" className="sr-only">Destination</label>
                <input type="text" id="input-email-label" className="py-3 px-4 block w-4/5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Where to go?"/></td>
              <td className=" whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
             <label htmlFor="input-email-label" className="sr-only">Activities</label>
                <input type="text" id="input-email-label" className="py-3 px-4 block w-2/3 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Activity"/>
              </td>
              <td className=" whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
             <label htmlFor="input-email-label" className="sr-only">Date</label>
                <input type="date" id="input-email-label" className="py-3 px-4 block w-2/3 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Date"/>
              </td>
              <td className=" whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
             <label htmlFor="input-email-label" className="sr-only">Guest</label>
                <input type="number" id="input-email-label" className="py-3 px-4 block w-2/3 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="0"/>
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Search
            </button>
              </td>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerSearch;