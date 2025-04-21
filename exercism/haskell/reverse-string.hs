-- https://exercism.org/tracks/haskell/exercises/reverse-string
-- easy - Reverse String

module ReverseString (reverseStringV1) where

-- V-1
reverseStringV1 :: String -> String
reverseStringV1 [] = []
reverseStringV1 (x:xs) = reverseStringV1 xs ++ [x]
