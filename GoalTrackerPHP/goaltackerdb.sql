-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 12, 2021 at 06:38 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goaltackerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `title` varchar(10) NOT NULL,
  `description` varchar(25) NOT NULL,
  `startdate` varchar(25) NOT NULL,
  `enddate` varchar(25) NOT NULL,
  `starttime` varchar(25) NOT NULL,
  `endtime` varchar(25) NOT NULL,
  `goalsteps` varchar(100) NOT NULL,
  `progress` decimal(4,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`title`, `description`, `startdate`, `enddate`, `starttime`, `endtime`, `goalsteps`, `progress`) VALUES
('', '', '', '', '', '', '', '0'),
('Goal 1', 'finish project', '2021-12-12', '2021-12-13', '13-52', '14-52', 'finish frontend,finish backend', '0'),
('', '', '', '', '', '', '', '0'),
('Goal 2', 'rasf', '2021-12-12', '2021-12-12', '14-57', '14-58', 'rwer', '0'),
('', '', '', '', '', '', '', '0'),
('Goal 2', 'rasf', '2021-12-12', '2021-12-12', '14-57', '14-58', 'rwer', '0');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `age` int(2) NOT NULL,
  `country` text NOT NULL,
  `city` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstname`, `lastname`, `age`, `country`, `city`, `email`, `username`, `password`) VALUES
('john', 'Doe', 19, 'Lebanon', 'Beirut', 'john@lau.edu', 'johndoe', '12345'),
('userfn1', 'userln1', 18, 'Lebanon', 'city', 'userfn1@email.com', 'userfn1_ln1', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
