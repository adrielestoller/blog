import { DropdownMenu } from "../components/ui/DropdownMenu";
export function DashboardPage() {
  return (
    <>
      <main className="max-w-3xl mx-auto my-12 flex flex-col gap-4">
        <h1 className="mb-6 text-3xl font-semibold">Dashboard</h1>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <DropdownMenu />
            <button
              type="button"
              className="py-1 px-2.5 ring--800 rounded-lg text-white font-bold bg-sky-600
            transition-all ease-in-out duration-200 hover:bg-sky-400
            focus:ring-2"
            >
              New
            </button>
          </div>
        </div>
        <div className="flex flex-col self-center">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-zinc-200">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-zinc-600 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-zinc-600 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-zinc-600 uppercase tracking-wider"
                      >
                        Author
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-zinc-600 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-zinc-600 uppercase tracking-wider"
                      >
                        Tags
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="cursor-pointer transition-all ease-in-out duration-200 hover:bg-zinc-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Título Interessante
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">00/00/0000</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <div className="h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://media.discordapp.net/attachments/1207509084367102042/1211193520333791242/BLEACHJET.jpg?ex=65ed4ede&is=65dad9de&hm=ab1cb5bdec70ec582454af0c0eb004994ea842c37d06616e001bfbe765e22017&=&format=webp&width=458&height=458"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Posted
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">
                        tag1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-sky-600 hover:text-sky-900">
                        <a href="#" className="">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
