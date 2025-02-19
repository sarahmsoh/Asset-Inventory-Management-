const AllocationHistory = ({ allocations }) => {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Allocation History</h3>
        <div className="space-y-4">
          {allocations?.map((allocation) => (
            <div key={allocation.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-medium">{allocation.user.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(allocation.allocatedAt).toLocaleDateString()} - 
                {allocation.deallocatedAt 
                  ? new Date(allocation.deallocatedAt).toLocaleDateString()
                  : 'Present'}
              </p>
            </div>
          ))}
          {allocations?.length === 0 && (
            <p className="text-gray-500">No allocation history available</p>
          )}
        </div>
      </div>
    );
  };
  
  export default AllocationHistory;