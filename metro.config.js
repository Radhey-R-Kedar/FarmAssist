// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const DefaultConfig = getDefaultConfig(__dirname);
DefaultConfig.resolver.assetExts.push('cjs');

module.exports = DefaultConfig;
