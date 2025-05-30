export default function Header({ title, breadcrumb, children }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold">{title}</span>
          <div className="flex items-center font-medium space-x-2 mt-2">
            {Array.isArray(breadcrumb) ? (
              breadcrumb.map((item, index) => (
                <span key={index} className="text-gray-500">
                  {index !== 0 && <span className="mx-1">/</span>}
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500">{breadcrumb}</span>
            )}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
