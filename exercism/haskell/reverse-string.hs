-- https://exercism.org/tracks/haskell/exercises/reverse-string
-- easy - Reverse String

module ReverseString (reverseStringV1, reverseStringV2) where

-- V-1
reverseStringV1 :: String -> String
reverseStringV1 [] = []
reverseStringV1 (x:xs) = reverseStringV1 xs ++ [x]

-- V-2
reverseStringV2 :: String -> String
reverseStringV2 xs = case xs of
    [] -> []
    (x:xs) -> reverseStringV2 xs ++ [x]
