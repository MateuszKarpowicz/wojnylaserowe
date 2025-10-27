/**
 * Utility classes for common patterns
 */

export const utilityClasses = {
  // Common spacing patterns
  spacing: {
    sectionPadding: 'py-8',
    sectionMargin: 'mb-12',
    cardPadding: 'p-6',
    buttonPadding: 'px-6 py-3',
  },
  
  // Common layout patterns
  layout: {
    container: 'max-w-4xl mx-auto',
    containerMd: 'max-w-screen-md mx-auto',
    containerLg: 'max-w-6xl mx-auto',
    grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    grid3: 'grid grid-cols-1 md:grid-cols-3 gap-8',
    flexCenter: 'flex items-center justify-center',
    textCenter: 'text-center',
  },
  
  // Common background patterns
  background: {
    white: 'bg-white',
    gray50: 'bg-gray-50',
    lightBg: 'bg-lightBg',
    infoBox: 'bg-gray-50 rounded-lg p-6',
    card: 'bg-white rounded-lg shadow-lg p-6',
  },
  
  // Common text patterns
  text: {
    heading: 'text-3xl font-bold text-textDark',
    headingMd: 'text-2xl md:text-3xl font-bold text-textDark',
    subtitle: 'text-lg text-gray-700',
    body: 'text-gray-700',
    center: 'text-center mb-12',
    centerMd: 'text-center mb-6',
  },
  
  // Common button patterns
  button: {
    primary: 'bg-neonBlue text-white font-semibold py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300',
    secondary: 'bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-neonBlue hover:text-white transition-colors duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  
  // Common form patterns
  form: {
    field: 'w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors',
    fieldDisabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
    label: 'block text-textDark text-sm font-semibold mb-2',
    error: 'text-red-600 text-sm mt-1',
  },
  
  // Common icon patterns
  icon: {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    circle: 'rounded-full flex items-center justify-center',
  },
};
