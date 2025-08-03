import Login from '@/components/(auth)/login/login'
import AuthLayout from '../layout'
export default function Page() {
  return (
    <div>
    <AuthLayout>
      <Login/>
    </AuthLayout>
    </div>
  )
}
