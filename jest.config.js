// module.exports= {

// 	clearMocks: true,
// 	collectCoverage: true,
// 	coverageDirectory: "coverage",
// 	testEnvironment: "jsdom",
// 	moduleNameMapper: {
// 		// "\\.(jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
// 		// 	"<rootDir>/test/jest/__mocks__/fileMock.js",
// 		// "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
// 		"\\.(css|less|scss|sass|svg)$": "identity-obj-proxy",
// 		'.+\.svg?.+$': '/src/assets/icons/ui.svg',
// 	},
// 	moduleDirectories: ["node_modules", "src"],
// };
module.exports = {
	verbose: true,
	globals: {
	  'ts-jest': {
		diagnostics: true,
	  },
	},
	transform: {
	  '^.+\\.(js|ts|tsx)?$': 'ts-jest',
	  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
		'jest-transform-stub',
	  '\\.(yaml)$': 'jest-raw-loader',
	},
	transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
	moduleNameMapper: {
	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testEnvironment: 'jest-environment-jsdom',
  };