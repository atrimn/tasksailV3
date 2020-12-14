import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
/***
  todo:
  wrap a tags with Next js Link 
  add typescript
***/

function NotificationBell({ user }) {
  if (!user) return null
  return (
    <button className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      <span className='sr-only'>View notifications</span>
      <svg
        className='h-6 w-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        />
      </svg>
    </button>
  )
}

function ProfileCircle({ user, size = '8' }) {
  return (
    <>
      {user ? (
        <img
          className={`h-${size} w-${size} rounded-full`}
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt='profile picture'
        />
      ) : (
        <svg
          className={`h-${size} w-${size} rounded-full`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='gray'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </>
  )
}

function MenuLinks({ user }) {
  if (!user) return null
  return (
    <>
      <a
        href='#'
        className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Dashboard
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Team
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Projects
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Calendar
      </a>
    </>
  )
}

function ProfileLinks({ user, size = 'mobile' }) {
  // Size: mobile view | window view. Affects styling.
  // if (!user) return null
  return (
    <>
      {size === 'mobile' ? (
        <>
          {user ? (
            <>
              <a
                href='#'
                className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              >
                Your Profile
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              >
                Settings
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              >
                Sign out
              </a>
            </>
          ) : null}
        </>
      ) : (
        <>
          {user ? (
            <>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Your Profile
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Settings
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Sign out
              </a>
            </>
          ) : (
            <>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Create account
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Sign in
              </a>
            </>
          )}
        </>
      )}
    </>
  )
}

function NavbarLinks({ user }) {
  if (!user) return null
  return (
    <>
      <a
        href='#'
        className='border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      >
        Dashboard
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      >
        Team
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      >
        Projects
      </a>
      <a
        href='#'
        className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      >
        Calendar
      </a>
    </>
  )
}

function ProfileInfo({ user }) {
  return (
    <>
      {user ? (
        <>
          <div className='text-base font-medium text-gray-800'>Tom Cook</div>
          <div className='text-sm font-medium text-gray-500'>
            tom@example.com
          </div>
        </>
      ) : (
        <>
          <Link href='/#'>
            <a className='block text-base font-medium text-indigo-800'>
              Sign in
            </a>
          </Link>
          <Link href='/#'>
            <a className='block text-sm font-medium text-indigo-500'>
              Create account
            </a>
          </Link>
        </>
      )}
    </>
  )
}

export default function Navbar() {
  const [profileMenu, toggleProfileMenu] = React.useState(false)
  const [mobileMenu, toggleMobileMenu] = React.useState(false)

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <a className='mt-1 text-2xl font-extrabold text-black-700 sm:text-3xl sm:tracking-tight lg:text-3xl'>
                Tasksail
              </a>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <NavbarLinks user={false} />
            </div>
          </div>
          <div className='hidden z-50 sm:ml-6 sm:flex sm:items-center'>
            <NotificationBell user={false} />
            <div className='ml-3 relative'>
              <div>
                <button
                  className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  id='user-menu'
                  aria-haspopup='true'
                  onClick={() => toggleProfileMenu(!profileMenu)}
                >
                  <span className='sr-only'>Open user menu</span>
                  <ProfileCircle user={false} />
                </button>
              </div>
              <Transition
                show={profileMenu}
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <div
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <ProfileLinks user={false} size='window' />
                </div>
              </Transition>
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
              onClick={() => toggleMobileMenu(!mobileMenu)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${mobileMenu ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${mobileMenu ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${mobileMenu ? 'block' : 'hidden'} sm:hidden`}>
        <div className='pt-2 pb-3 space-y-1'>
          <MenuLinks user={false} />
        </div>
        <div className='pt-4 pb-3 border-t border-gray-200'>
          <div className='flex items-center px-4'>
            <div className='flex-shrink-0'>
              <ProfileCircle user={false} size='10' />
            </div>
            <div className='ml-3'>
              <ProfileInfo user={false} />
            </div>
            <NotificationBell user={false} />
          </div>
          <div className='mt-3 space-y-1'>
            <ProfileLinks user={false} />
          </div>
        </div>
      </div>
    </nav>
  )
}
