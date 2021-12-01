pgf.jsonp("object", {"@":"game","version":"0.25","hash":641227100,"title":"Good Tank, Bad Tank","attributes":{"name":"default name","displaySize":{"width":1024,"height":768},"actorTags":"","randomSeed":1,"platformConnected":false,"adReward":{"name":"","value":0},"playerType":1,"player1 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player2 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player3 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player4 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player5 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player6 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player7 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player8 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"id692895":{"@":"table","name":"PurchaseTable","$":"PurchaseTable"},"id191526":{"@":"real","name":"GoodTankX","$":0},"id102446":{"@":"real","name":"GoodTankY","$":0},"id194608":{"@":"integer","name":"GoodTankHealth","$":3},"id117933":{"@":"integer","name":"BadTankHealth","$":3},"id197739":{"@":"boolean","name":"RotateRight","$":false},"id140093":{"@":"boolean","name":"RotateLeft","$":false},"id145657":{"@":"boolean","name":"MoveBack","$":false},"id169443":{"@":"boolean","name":"MoveForward","$":false},"id124766":{"@":"boolean","name":"Fire","$":false}},"resolution":"3","resolutionIndependence":"0","networkEnabled":"0","instructions":"Add game instructions here.","longDescription":"A simple game.","prototypes":[{"id":"id164354","hash":1425744034,"attributes":{"name":"Good Tank","position":{"x":0,"y":0},"size":{"width":64,"height":64},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"tankBlue","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":128,"tileHeight":128}},"physics":{"attributes":{"density":1,"friction":3,"movable":true,"canSleep":true}}},"behaviors":[{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false,"compoundConditionKind":1},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"key","conditionType":"over actor","attributes":{"mode":"down","keyString":"up"}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id169443"},"predicate":{"type":"boolean","attributes":{"RHS":1}}}],"behaviors":{"class":"MoveBehavior","attributes":{"direction":0,"space":0,"moveType":0,"speed":150}}},{"class":"RuleBehavior","attributes":{"compoundConditionKind":1,"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"key","conditionType":"over actor","attributes":{"keyString":"down","mode":"down"}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id145657"},"predicate":{"type":"boolean","attributes":{"RHS":1}}}],"behaviors":{"class":"MoveBehavior","attributes":{"direction":180,"moveType":0,"space":0,"speed":150}}},{"class":"RuleBehavior","attributes":{"compoundConditionKind":1,"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"key","conditionType":"over actor","attributes":{"keyString":"left","mode":"down"}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id140093"},"predicate":{"type":"boolean","attributes":{"RHS":1}}}],"behaviors":{"class":"RotateBehavior","attributes":{"angularVelocity":60,"direction":1}}},{"class":"RuleBehavior","attributes":{"compoundConditionKind":1,"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id197739"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},{"attributes":{"conditionType":0},"predicate":{"type":"key","conditionType":"over actor","attributes":{"mode":"down","keyString":"right"}}}],"behaviors":{"class":"RotateBehavior","attributes":{"angularVelocity":60,"direction":0}}},{"class":"CollideBehavior","attributes":{"actorTag":"","prototypeKey":"id152777","mode":"0"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false,"compoundConditionKind":1},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"key","conditionType":"over actor","attributes":{"mode":"down","keyString":"space"}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id124766"},"predicate":{"type":"boolean","attributes":{"RHS":1}}}],"behaviors":[{"class":"SpawnAction","attributes":{"direction":0,"directionSpace":0,"x":0,"y":0,"positionSpace":0,"layerOrder":1,"prototypeKey":"id118413"}},{"class":"PlaySoundAction","attributes":{"soundName":"laser","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}}]},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"game.attributes.id191526","RHS":{"expression":{"keypath":"self.attributes.position.x"}}}},{"class":"ConstrainAttributeBehavior","attributes":{"RHS":{"expression":{"keypath":"self.attributes.position.y"}},"targetAttribute":"game.attributes.id102446"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id194608"},"predicate":{"type":"number","attributes":{"RHS":0}}},"behaviors":[{"class":"PlaySoundAction","attributes":{"soundName":"boom","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}},{"class":"ChangeSceneAction","attributes":{"sceneKey":"id151977","enableAdvertisement":0,"index":1}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"mode":0,"actorTag":"","prototypeKey":"id130051"}}},"behaviors":[{"class":"PlaySoundAction","attributes":{"soundName":"boom","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id194608","RHS":{"expression":[{"keypath":"game.attributes.id194608"},"-1"]}}}]}]},{"id":"id152777","hash":1751431720,"attributes":{"name":"Wall","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"fixedRotation":true,"canSleep":true}}},"behaviors":[]},{"id":"id131209","hash":1416030315,"attributes":{"name":"Background","position":{"x":0,"y":0},"size":{"width":1024,"height":768},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"background","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":1024,"tileHeight":768}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id118413","hash":478234397,"attributes":{"name":"Good Bullet","position":{"x":0,"y":0},"size":{"width":78,"height":20},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"projectileBlue","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":78,"tileHeight":20}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[{"class":"MoveBehavior","attributes":{"direction":0,"space":0,"moveType":0,"speed":300}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false,"compoundConditionKind":1},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"mode":0,"actorTag":"","prototypeKey":"id152777"}}},{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"mode":0,"actorTag":"","prototypeKey":"id124164"}}}],"behaviors":{"class":"DestroyAction"}}]},{"id":"id124164","hash":2057611003,"attributes":{"name":"Bad Tank","position":{"x":0,"y":0},"size":{"width":64,"height":64},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"tankRed","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":128,"tileHeight":128}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[{"class":"MoveToBehavior","attributes":{"runToCompletion":false,"position":{"x":{"expression":{"keypath":"game.attributes.id191526"}},"y":{"expression":{"keypath":"game.attributes.id102446"}}},"space":1,"speed":50}},{"class":"RotateToPositionBehavior","attributes":{"runToCompletion":false,"space":1,"angularVelocity":50,"continuousMovement":true,"position":{"x":{"expression":{"keypath":"game.attributes.id191526"}},"y":{"expression":{"keypath":"game.attributes.id102446"}}},"offsetAngle":0}},{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":0,"interval":3,"runToCompletion":false},"behaviors":[{"class":"SpawnAction","attributes":{"direction":0,"directionSpace":0,"x":0,"y":0,"positionSpace":0,"layerOrder":1,"prototypeKey":"id130051"}},{"class":"PlaySoundAction","attributes":{"soundName":"laser","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id117933"},"predicate":{"type":"number","attributes":{"RHS":0}}},"behaviors":[{"class":"PlaySoundAction","attributes":{"dopplerShift":false,"loop":false,"pitch":1,"positional":false,"runToCompletion":true,"soundName":"boom","volume":1}},{"class":"ChangeSceneAction","attributes":{"enableAdvertisement":0,"index":1,"sceneKey":"id103429"}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"mode":0,"actorTag":"","prototypeKey":"id118413"}}},"behaviors":[{"class":"PlaySoundAction","attributes":{"dopplerShift":false,"loop":false,"pitch":1,"positional":false,"runToCompletion":true,"soundName":"boom","volume":1}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id117933","RHS":{"expression":[{"keypath":"game.attributes.id117933"},"-1"]}}}]}]},{"id":"id130051","hash":1300587677,"attributes":{"name":"Bad Bullet","position":{"x":0,"y":0},"size":{"width":78,"height":20},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"projectileRed","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":78,"tileHeight":20}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[{"class":"MoveBehavior","attributes":{"direction":0,"space":0,"moveType":0,"speed":300}},{"class":"RuleBehavior","attributes":{"compoundConditionKind":1,"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"actorTag":"","mode":0,"prototypeKey":"id152777"}}},{"attributes":{"conditionType":0},"predicate":{"type":"collision","conditionType":"over actor","attributes":{"mode":0,"actorTag":"","prototypeKey":"id164354"}}}],"behaviors":{"class":"DestroyAction"}}]},{"id":"id182178","hash":1225664166,"attributes":{"name":"Game Over","position":{"x":0,"y":0},"size":{"width":500,"height":150},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"DisplayTextBehavior","attributes":{"text":"Game Over","font":"Arimo","size":100,"alignment":1,"wrap":false,"color":{"red":1,"green":0.03137254901960784,"blue":0.03137254901960784,"alpha":1},"offsetx":0,"offsety":0,"space":0,"direction":0,"directionSpace":0}}},{"id":"id163909","hash":406183923,"attributes":{"name":"Back Button","position":{"x":0,"y":0},"size":{"width":472,"height":78},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"buttonBack1","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":472,"tileHeight":78}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":[{"class":"PlaySoundAction","attributes":{"soundName":"Button1","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}},{"class":"ChangeImageAction","attributes":{"image":"buttonBack2"}},{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":true},"behaviors":{"class":"ChangeSceneAction","attributes":{"sceneKey":"id925876","enableAdvertisement":0,"index":1}}}],"elseBehaviors":{"class":"ChangeImageAction","attributes":{"image":"buttonBack1"}}}},{"id":"id189510","hash":1308361409,"attributes":{"name":"You Win","position":{"x":0,"y":0},"size":{"width":500,"height":150},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"DisplayTextBehavior","attributes":{"text":"You Win!","font":"Arimo","size":100,"alignment":1,"wrap":false,"color":{"red":0.00392156862745098,"green":1,"blue":0,"alpha":1},"offsetx":0,"offsety":0,"space":0,"direction":0,"directionSpace":0}}},{"id":"id112213","hash":1546452065,"attributes":{"name":"Title","position":{"x":0,"y":0},"size":{"width":712,"height":404},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"title","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":712,"tileHeight":404}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id131987","hash":1313836648,"attributes":{"name":"Start Button","position":{"x":0,"y":0},"size":{"width":472,"height":124},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"buttonStart1","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":472,"tileHeight":124}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":[{"class":"PlaySoundAction","attributes":{"soundName":"Button1","loop":false,"runToCompletion":true,"positional":false,"dopplerShift":false,"volume":1,"pitch":1}},{"class":"ChangeImageAction","attributes":{"image":"buttonStart2"}},{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":true},"behaviors":[{"class":"ChangeSceneAction","attributes":{"sceneKey":"id196880","enableAdvertisement":0,"index":1}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id194608","RHS":"3"}},{"class":"ChangeAttributeAction","attributes":{"RHS":"3","targetAttribute":"game.attributes.id117933"}}]}],"elseBehaviors":{"class":"ChangeImageAction","attributes":{"image":"buttonStart1"}}}},{"id":"id105109","hash":55579043,"attributes":{"name":"Instructions button","position":{"x":0,"y":0},"size":{"width":472,"height":78},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"buttonInstructions2","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":472,"tileHeight":78}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":[{"class":"PlaySoundAction","attributes":{"dopplerShift":false,"loop":false,"pitch":1,"positional":false,"runToCompletion":true,"soundName":"Button1","volume":1}},{"class":"ChangeImageAction","attributes":{"image":"buttonInstructions2"}},{"class":"TimerBehavior","attributes":{"interval":1,"runOnce":false,"runSequentially":false,"runToCompletion":true,"timerType":1},"behaviors":{"class":"ChangeSceneAction","attributes":{"enableAdvertisement":0,"index":1,"sceneKey":"id101456"}}}],"elseBehaviors":{"class":"ChangeImageAction","attributes":{"image":"buttonInstructions1"}}}},{"id":"id171050","hash":791093887,"attributes":{"name":"Instructions","position":{"x":0,"y":0},"size":{"width":804,"height":604},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"instructions","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":804,"tileHeight":604}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id175932","hash":112182600,"attributes":{"name":"Paused","position":{"x":0,"y":0},"size":{"width":788,"height":404},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"paused","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":788,"tileHeight":404}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id158314","hash":106502241,"attributes":{"name":"Pause Button","position":{"x":0,"y":0},"size":{"width":50,"height":50},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"buttonPause1","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":78,"tileHeight":78}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":[{"class":"PlaySoundAction","attributes":{"dopplerShift":false,"loop":false,"pitch":1,"positional":false,"runToCompletion":true,"soundName":"Button1","volume":1}},{"class":"ChangeImageAction","attributes":{"image":"buttonPause2"}},{"class":"TimerBehavior","attributes":{"interval":1,"runOnce":false,"runSequentially":false,"runToCompletion":true,"timerType":1},"behaviors":{"class":"PauseGameAction","attributes":{"sceneKey":"id120593","enableAdvertisement":0}}}],"elseBehaviors":{"class":"ChangeImageAction","attributes":{"image":"buttonPause1"}}}},{"id":"id164064","hash":382867070,"attributes":{"name":"Resume button","position":{"x":0,"y":0},"size":{"width":472,"height":78},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"buttonResume1","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":472,"tileHeight":78}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":[{"class":"PlaySoundAction","attributes":{"dopplerShift":false,"loop":false,"pitch":1,"positional":false,"runToCompletion":true,"soundName":"Button1","volume":1}},{"class":"ChangeImageAction","attributes":{"image":"buttonResume2"}},{"class":"TimerBehavior","attributes":{"interval":1,"runOnce":false,"runSequentially":false,"runToCompletion":true,"timerType":1},"behaviors":{"class":"UnpauseGameAction"}}],"elseBehaviors":{"class":"ChangeImageAction","attributes":{"image":"buttonResume1"}}}},{"id":"id118272","hash":594542740,"attributes":{"name":"Good Tank Health Holder","position":{"x":0,"y":0},"size":{"width":292,"height":44},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"healthHolderBlue","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":292,"tileHeight":44}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id195984","hash":1016130343,"attributes":{"name":"Good Tank Health","position":{"x":0,"y":0},"size":{"width":72,"height":28},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"healthBarBlue","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":216,"tileHeight":28}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"ReplicateBehavior","attributes":{"angle":0,"spacing":72,"copies":{"expression":{"keypath":"game.attributes.id194608"}}}}},{"id":"id118412","hash":1322706268,"attributes":{"name":"Bad Tank Health Holder","position":{"x":0,"y":0},"size":{"width":292,"height":44},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"healthHolderRed","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":292,"tileHeight":44}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id179140","hash":139204249,"attributes":{"name":"Bad Tank Health","position":{"x":0,"y":0},"size":{"width":72,"height":28},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"healthBarRed","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":216,"tileHeight":28}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"ReplicateBehavior","attributes":{"angle":180,"copies":{"expression":{"keypath":"game.attributes.id117933"}},"spacing":72}}},{"id":"id167154","hash":1331324285,"attributes":{"name":"RotateRightButton","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"zControllerButtonRight","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id197739","RHS":"true"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"false","targetAttribute":"game.attributes.id197739"}}}},{"id":"id101948","hash":517851882,"attributes":{"name":"RotateLeftButton","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"zControllerButtonLeft","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"true","targetAttribute":"game.attributes.id140093"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"false","targetAttribute":"game.attributes.id140093"}}}},{"id":"id151190","hash":1172586234,"attributes":{"name":"MoveBackButton","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"zControllerButtonDown","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"true","targetAttribute":"game.attributes.id145657"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"false","targetAttribute":"game.attributes.id145657"}}}},{"id":"id128347","hash":1202255102,"attributes":{"name":"MoveForwardButton","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"zControllerButtonUp","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"true","targetAttribute":"game.attributes.id169443"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"false","targetAttribute":"game.attributes.id169443"}}}},{"id":"id173290","hash":1944837179,"attributes":{"name":"FireButton","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"zControllerButtonA","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"true","targetAttribute":"game.attributes.id124766"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"RHS":"false","targetAttribute":"game.attributes.id124766"}}}}],"scenes":[{"@":"scene","id":"id925876"},{"@":"scene","id":"id101456"},{"@":"scene","id":"id196880"},{"@":"scene","id":"id103429"},{"@":"scene","id":"id151977"},{"@":"scene","id":"id120593"}]});
