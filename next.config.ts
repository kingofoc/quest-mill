import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) { 
    config.module.rules.push({ 
      test: /\.svg$/, 
      issuer: { 
        and: [ 
          /\.tsx?$/, 
          /\.jsx?$/, 
        ], 
      },
      use: ['@svgr/webpack'], 
    }); 
    
    return config; },
};

export default nextConfig;
