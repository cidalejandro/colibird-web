import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText, BarChart3, ChevronDown } from "lucide-react"
import { Logo } from "@/components/colibird/logo"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isWhiteBackgroundPage = pathname === "/nosotros" || pathname === "/desarrolladores"
  const shouldUseDarkText = isScrolled || isWhiteBackgroundPage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const navigationItems = [
    {
      name: "Productos",
      icon: FileText,
      dropdown: [
        { name: "ECHEQ - Argentina", href: "/echeq" },
        { name: "RADIAN - Colombia", href: "/radian" },
        { name: "Supply Chain Finance LATAM", href: "/scf" },
        { name: "Click to Pay", href: "/click-to-pay" },
      ],
    },
    { name: "Nosotros", icon: BarChart3, href: "/nosotros" },
    { name: "Desarrolladores", icon: FileText, href: "/desarrolladores" },
  ]

  const linkClass = (isActive = false) =>
    `text-sm font-medium transition-all duration-300 hover:scale-105 relative group flex items-center space-x-2 ${
      shouldUseDarkText ? "text-gray-700 hover:text-purple-600" : "text-white/90 hover:text-white"
    }`

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/20 shadow-xl"
            : isWhiteBackgroundPage
              ? "bg-white/95 backdrop-blur-sm border-b border-gray-200"
              : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-1">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer max-w-[200px]">
              <Logo width={100} height={30} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group dropdown-container">
                {item.href && !item.dropdown ? (
                  <Link to={item.href} className={linkClass()}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    onClick={(e) => {
                      if (item.dropdown) {
                        toggleDropdown(item.name, e)
                      } else if (item.href) {
                        handleNavClick(item.href)
                      }
                    }}
                    className={linkClass()}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.name}>
                        {dropdownItem.href.startsWith("#") ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleNavClick(dropdownItem.href)
                            }}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </button>
                        ) : (
                          <Link
                            to={dropdownItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              size="sm"
              onClick={() => navigate("/contacto")}
              className={`hidden md:inline-flex px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                isScrolled || isWhiteBackgroundPage
                  ? "gradient-primary text-white hover:scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              Contacta a un Experto
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                shouldUseDarkText ? "hover:bg-gray-100" : "glass-dark hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-5 h-5 ${shouldUseDarkText ? "text-gray-700" : "text-white"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${shouldUseDarkText ? "text-gray-700" : "text-white"}`} />
              )}
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            className={`lg:hidden backdrop-blur-xl border-t ${
              shouldUseDarkText ? "bg-white/95 border-gray-200" : "glass border-white/20"
            }`}
          >
            <div className="px-6 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  {item.href && !item.dropdown ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 text-sm font-medium transition-all duration-300 py-2 w-full text-left ${
                        shouldUseDarkText ? "text-gray-700 hover:text-purple-600" : "text-white/90 hover:text-white"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else if (item.href) {
                          handleNavClick(item.href)
                        }
                      }}
                      className={`flex items-center space-x-3 text-sm font-medium transition-all duration-300 py-2 w-full text-left ${
                        shouldUseDarkText ? "text-gray-700 hover:text-purple-600" : "text-white/90 hover:text-white"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  )}
                  {item.dropdown && (
                    <div className="ml-7 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          {dropdownItem.href.startsWith("#") ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleNavClick(dropdownItem.href)
                              }}
                              className={`block text-xs py-1 transition-colors duration-200 w-full text-left ${
                                shouldUseDarkText
                                  ? "text-gray-600 hover:text-purple-600"
                                  : "text-white/70 hover:text-white"
                              }`}
                            >
                              {dropdownItem.name}
                            </button>
                          ) : (
                            <Link
                              to={dropdownItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block text-xs py-1 transition-colors duration-200 w-full text-left ${
                                shouldUseDarkText
                                  ? "text-gray-600 hover:text-purple-600"
                                  : "text-white/70 hover:text-white"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className={`pt-4 border-t ${shouldUseDarkText ? "border-gray-200" : "border-white/10"}`}>
                <Button
                  className="w-full gradient-primary text-white"
                  onClick={() => {
                    navigate("/contacto")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Contacta a un Experto
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
