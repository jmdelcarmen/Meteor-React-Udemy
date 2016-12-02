'use strict';
//Declare our Collection
import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');
