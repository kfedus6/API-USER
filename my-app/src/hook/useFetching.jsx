import { useState } from 'react'

export const useFetching = (callback) => {

   const [loading, setLoading] = useState(false)
   const [UsersError, setUsersError] = useState('')

   const fetching = async () => {
      setLoading(true)
      try {
         callback()
      } catch (e) {
         console.log(e)
         setUsersError(e)
      }
      setLoading(false)
   }

   return [fetching, loading, UsersError]
}

