import useStore  from '../hooks/useStore'
import { setCurrentUser } from './user'

describe('UseStore', () => {
  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
  })
})
