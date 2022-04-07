import { useState } from 'react'

export const useFetching = (callback) => {

   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')

   const fetching = async () => {
      setLoading(true)
      try {
         callback()
      } catch (e) {
         console.log(e)
         setError(e)
      }
      setLoading(false)
   }

   return [fetching, loading, error]
}

