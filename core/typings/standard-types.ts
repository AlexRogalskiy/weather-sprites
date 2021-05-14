/**
 * Optional
 * @desc Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined
//--------------------------------------------------------------------------------------------------
/**
 * Processor
 * @desc Type representing processor function type in TypeScript
 * @example
 *   type Processor = (v) => return new String(v)
 */
export type Processor<T, V> = (v: T) => V
//--------------------------------------------------------------------------------------------------
/**
 * Supplier
 * @desc Type representing supplier function type in TypeScript
 * @example
 *   type Supplier = () => return new String()
 */
export type Supplier<T> = () => T
//--------------------------------------------------------------------------------------------------
/**
 * BiProcessor
 * @desc Type representing binary processor function type in TypeScript
 * @example
 *   type BiProcessor = (v1, v2) => return new String(v1 + v2)
 */
export type BiProcessor<T, P, V> = (v1: T, v2: P) => V
//--------------------------------------------------------------------------------------------------
/**
 * BiConsumer
 * @desc Type representing binary consumer function type in TypeScript
 * @example
 *   type BiConsumer = (v1, v2) => console.log(v1 + ":" + v2)
 */
export type BiConsumer<T, V> = (v1: T, v2: V) => void
//--------------------------------------------------------------------------------------------------
/**
 * StyledRecord
 * @desc Type representing styled record
 */
export type StyledRecord = {
    [ruleOrSelector: string]: PropertyKey | StyledRecord
}
//--------------------------------------------------------------------------------------------------
