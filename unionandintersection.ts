

// Intersection Types (&)

// T00: unknown & null => null
const T00: null = null; // null is a valid value for unknown & null

// T01: string & number => never
// string & number results in never because nothing can be both string and number
const T01: never ;

// T02: unknown & undefined => undefined
const T02: undefined = undefined; // undefined is a valid result for unknown & undefined

// T03: unknown & null & undefined => null
const T03: null = null; // null is the specific result for unknown & null & undefined

// T04: unknown & string[] => string[]
const T04: string[];  // string[] is the valid result for unknown & string[]

// T05: unknown & unknown => unknown
const T05: unknown ; // remains unknown since unknown & unknown is unknown

// T06: unknown & any => any
const T06: any ; // any takes precedence over unknown


// Union Types (|)

// T10: unknown | null => unknown
const T10: unknown = null; // null is a subtype of unknown, so the result is unknown

// T11: unknown | undefined => unknown
const T11: unknown = undefined; // unknown can also hold undefined

// T12: unknown | null | undefined
const T12 =unknown;

// T13: unknown | string
const T13 = string;

// T14: unknown | string[]
const T14 = string;

// T15: unknown | unknown
const T15 = unknown; // though in practice, this condition doesn't make sense

// T16: unknown | any
const T16 =  any ;// unknown | any results in any
