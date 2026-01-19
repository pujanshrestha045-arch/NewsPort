import { CheckCircle, Mail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'

function NewsSubscription() {
  const [ email, setEmail ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)
  const [ error, setError ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLoading) return

    setError("")    

    const form = e.currentTarget

    if(!form.checkValidity()) {
        setError("Please enter a valid email address")
        return
    }

    setIsLoading(true)

    setTimeout(() => {
        setIsSuccess(true)
        setEmail("")
        setIsLoading(false)

        // Reset Success Message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
    }, 500)
    }

    useEffect(() => {
    let successTimeout

    if (isSuccess) {
      successTimeout = setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }

    return () => clearTimeout(successTimeout)
  }, [isSuccess])

  

  if (isSuccess){
    return (
        <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <div>
                <h4 className="font-semibold text-green-900 dark:text-green-300">Subscription Successful!</h4>
                <p className="text-sm text-green-800 dark:text-green-400">Check your email for confirmation.</p>
            </div>
        </div>
    )
  }

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit} noValidate>
        <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold block">
                Email Address
            </label>
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        id="email"
                        type='email'
                        required
                        placeholder='your@example.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
                        className='pl-10 bg-muted min-w-full py-2'
                        disabled={isLoading} 
                    />
                </div>
                <Button disabled={isLoading} className="min-w-fit" >
                    {isLoading ? "..." : "Subscribe"}
                </Button>
            </div>
        </div>

        {error && <p className='text-sm text-destructive'>{error}</p>}

        <p className='text-xs text-muted-foreground'>We'll never share your email. Unsubscribe anytime.</p>
      </form>
    </>
  )
}

export default NewsSubscription
