import Employee from 'old/domain/employees/entities/Employee';
import RepositoryInterface from 'old/domain/@shared/repositories/RepositoryInterface';

export default interface EmployeesRepositoryInterface
  extends RepositoryInterface<Employee> { }