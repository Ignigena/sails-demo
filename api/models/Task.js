/**
 * Task
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	name: {
      type: 'string'
    },

    priority: {
      type: 'integer',
      defaultsTo: '5'
    },

    done: {
      type: 'boolean',
      defaultsTo: false
    }
    
  }

};
