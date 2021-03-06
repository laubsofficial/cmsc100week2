var request = require('supertest'),
    should = require('should-http');
    
describe('student', function(){
    var url = 'localhost:5000';
    describe('find()', function(){
        it('should retrieve all student record', function(done){
            request(url)
                .get('/students')
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Array);
                    done();
                });
                
        });
    });
    describe('findOne()', function(){
        it('should retrieve an existing student record', function(done){
            request(url)
                .get('/students/2013-00000')
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                    done();
                });       
        });
    });
    describe('insert()', function(){
        it('should return newly created record', function(done){
            request(url)
                .post('/students')
                .send({
                    'studNo':'2005-12345',
                    'name': 'Please Work',
                    'bdate': '1996-11-01'
                })
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object).and.have.properties({
                    	'studNo': '2005-12345',
                    	'name': 'Please Work',
                    	'bdate': '1996-11-01'
					});
                    done();
                })
        });
    });
    
    /*describe('update()', function(){
        it('', function(){
            
        });
    });
    describe('remove()', function(){
        it('', function(){
            
        });
    });*/
});