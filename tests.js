/**
 * Genesis3 Module Test Configuration - Cloudflare Extension
 */

module.exports = {
  moduleId: 'extension-cloudflare',
  moduleName: 'Cloudflare CDN & Security',

  scenarios: [
    {
      name: 'cloudflare-cdn',
      description: 'Cloudflare CDN configuration',
      config: {
        moduleId: 'cf-cdn',
        kind: 'extension',
        type: 'cloudflare',
        layers: ['ops'],
        enabled: true,
        fieldValues: {
          zoneName: 'myapp.com',
          enableCDN: true,
          enableDDoSProtection: false,
          enableWAF: false
        }
      },
      expectedFiles: [
        'ops/cloudflare/cdn-config.yaml'
      ]
    },
    {
      name: 'cloudflare-security',
      description: 'Cloudflare with full security features',
      config: {
        moduleId: 'cf-secure',
        kind: 'extension',
        type: 'cloudflare',
        layers: ['ops'],
        enabled: true,
        fieldValues: {
          zoneName: 'secure.example.com',
          enableCDN: true,
          enableDDoSProtection: true,
          enableWAF: true,
          enablePageRules: true
        }
      },
      expectedFiles: [
        'ops/cloudflare/cdn-config.yaml',
        'ops/cloudflare/security-config.yaml',
        'ops/cloudflare/waf-rules.yaml'
      ]
    }
  ]
};
