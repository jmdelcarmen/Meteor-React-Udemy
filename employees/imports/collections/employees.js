'use strict';
//declare a collection

import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');