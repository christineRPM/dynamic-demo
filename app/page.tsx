'use client';

import { DynamicEmbeddedWidget, useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { useState } from 'react';
import { CookieAuthDemo } from '@/components/CookieAuthDemo';


export default function Home() {
  const { user, primaryWallet } = useDynamicContext();
  const isAuthenticated = useIsLoggedIn();
  const address = primaryWallet?.address;
  const [activeTab, setActiveTab] = useState('transfers');


  const tabs = [
    { id: 'transfers', label: 'Embedded Wallet Integration', icon: '' },
    { id: 'auth', label: 'Authentication & JWT Verification', icon: '' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 gap-3 sm:gap-0">
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white truncate">
                Dynamic.xyz Enterprise Demo
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                USDC Wallet Integration with Account Abstraction & Secure Authentication
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Embedded Widget Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Dynamic Wallet
              </h3>
              <div className="widget-container">
                <DynamicEmbeddedWidget 
                  background="default"
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {!isAuthenticated ? (
              /* Welcome Screen */
              <div className="text-center py-8 sm:py-16">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                    Secure USDC Wallet Demo
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
                    This demo showcases Dynamic&apos;s embedded wallet for secure USDC transfers 
                    with cookie-based authentication and backend token verification.
                  </p>
                  
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mx-2 sm:mx-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">
                      Demo Solutions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">$</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">Smart Wallet AA</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">Paymaster-sponsored transactions with smart wallets</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">🔒</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">Cookie Authentication</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">Secure session management for your backend</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">JWT</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">JWT Verification</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">Backend token validation with JWKS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4 sm:p-6 mx-2 sm:mx-0">
                    <p className="text-sm sm:text-base lg:text-lg text-yellow-200">
                      <strong>Create a new wallet by logging in with your email</strong> to explore all demo solutions!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Authenticated Dashboard with Tabs */
              <div className="space-y-6 sm:space-y-8">

                {/* Tab Navigation */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  <div className="border-b border-gray-700">
                    <nav className="flex space-x-0">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 px-4 py-4 text-sm font-medium transition-colors border-r border-gray-700 last:border-r-0 ${
                            activeTab === tab.id
                              ? 'bg-blue-600/20 text-blue-400 border-b-2 border-blue-400'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-1">
                            <span className="hidden sm:block">{tab.label}</span>
                            <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                          </div>
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === 'transfers' && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Embedded Wallet Integration
                          </h3>
                          <p className="text-gray-300 mb-4">
                            Dynamic&apos;s embedded wallet with native send/receive functionality for USDC transfers
                          </p>
                          <a
                            href="https://www.dynamic.xyz/docs/wallets/embedded-wallets/mpc/setup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                          >
                            View Documentation
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>

                        {/* Compact User Info */}
                        <div className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-4 mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium text-white">Connected Account</h4>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium border border-green-500/30">
                              Active
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div>
                              <p className="text-xs text-gray-400">User</p>
                              <p className="text-white font-medium mt-1">
                                {user?.email || user?.alias || 'User'}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Wallet</p>
                              <p className="font-mono text-white text-xs mt-1 truncate">
                                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Network</p>
                              <p className="text-blue-400 font-medium mt-1">
                                Base Sepolia
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}


                    {activeTab === 'auth' && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Authentication & JWT Verification
                          </h3>
                          <p className="text-gray-300 mb-4">
                            Authentication flow with Dynamic&apos;s cookie-based auth and backend JWT verification
                          </p>
                          <div className="flex flex-wrap justify-center gap-3">
                            <a
                              href="https://www.dynamic.xyz/docs/authentication-methods/cookie-authentication"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
                            >
                              Cookie Authentication Docs
                              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <a
                              href="https://www.dynamic.xyz/docs/authentication-methods/auth-tokens"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium transition-colors"
                            >
                              JWT Tokens Docs
                              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        
                        <CookieAuthDemo />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}