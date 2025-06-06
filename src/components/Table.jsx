export default function Table({ theadData, tbodyData }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full text-sm text-left border border-gray-200 bg-white shadow-lg">
        <thead className="bg-biru text-white uppercase">
          <tr>
            {theadData.map((heading, index) => (
              <th key={index} className="px-6 py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="text-sm px-6 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
