import ListCertificate from './ListCertificate'
import EmployeeCertificate from './EmployeeCertificate'

export const menu = [
  {
    key: 'certificate_validation',
    name: 'certificate_validation',
    element: <ListCertificate key={0}></ListCertificate>,
  },
  {
    key: 'employee_certificate',
    name: 'employee_certificate',
    element: <EmployeeCertificate key={0}></EmployeeCertificate>,
  },
]
