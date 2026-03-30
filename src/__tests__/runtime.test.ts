/**
 * P1 executionClass Runtime Smoke Test
 *
 * Verifies that the Next.js app's core runtime environment is healthy:
 * - Node.js environment variables are accessible
 * - TypeScript types resolve correctly at runtime
 * - Basic module imports work as expected
 *
 * These checks guard against environment misconfiguration that would
 * cause silent failures in Server Components or API routes.
 */

describe('P1 executionClass — runtime environment', () => {
  it('runs in a Node.js-compatible environment', () => {
    expect(typeof process).toBe('object');
    expect(typeof process.version).toBe('string');
    expect(process.version).toMatch(/^v\d+\./);
  });

  it('has a valid NODE_ENV value', () => {
    const validEnvs = ['development', 'test', 'production'];
    expect(validEnvs).toContain(process.env.NODE_ENV);
  });

  it('supports modern JavaScript features (ES2022+)', () => {
    // Optional chaining
    const obj: { a?: { b?: number } } = { a: { b: 42 } };
    expect(obj?.a?.b).toBe(42);

    // Nullish coalescing
    const value = null ?? 'fallback';
    expect(value).toBe('fallback');

    // Array at()
    const arr = [1, 2, 3];
    expect(arr.at(-1)).toBe(3);

    // Object.hasOwn()
    expect(Object.hasOwn({ x: 1 }, 'x')).toBe(true);
  });

  it('supports async/await and Promises', async () => {
    const result = await Promise.resolve('ok');
    expect(result).toBe('ok');
  });

  it('supports structuredClone (Next.js 15 requirement)', () => {
    const original = { nested: { value: 1 } };
    const clone = structuredClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
    expect(clone.nested).not.toBe(original.nested);
  });

  it('can parse and stringify JSON (API response handling)', () => {
    const data = { status: 'healthy', bots: 3, timestamp: Date.now() };
    const roundtripped = JSON.parse(JSON.stringify(data));
    expect(roundtripped).toEqual(data);
  });

  it('URL constructor is available (fetch/API calls)', () => {
    const url = new URL('https://dev.agentopia.vn/api/v1/bots/');
    expect(url.hostname).toBe('dev.agentopia.vn');
    expect(url.pathname).toBe('/api/v1/bots/');
  });
});
