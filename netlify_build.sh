#!/bin/bash

cd themes/pukka-built
npm build

cd ../..
hugo
