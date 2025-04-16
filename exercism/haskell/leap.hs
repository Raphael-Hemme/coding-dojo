-- https://exercism.org/tracks/haskell/exercises/leap
-- easy - Leap

isEvenlyDivisibleBy :: Integer -> Integer -> Bool
isEvenlyDivisibleBy x y = x `mod` y == 0

isLeapYear :: Integer -> Bool
isLeapYear year
    | isEvenlyDivisibleBy year 400 = True
    | isEvenlyDivisibleBy year 100 = False
    | isEvenlyDivisibleBy year 4   = True
    | otherwise                    = False
