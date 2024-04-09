namespace NWPC.BundyClock.Entity
{
    public class EmployeeData
    {
        public int Id { get; set; }
        public required string EmployeeName { get; set; }
        public int EmployeeID { get; set; }
        public byte[] EmployeePhoto { get; set; }
        public override string ToString()
        {
            return $"{EmployeeName} ({EmployeeID})";
        }
    }

}
