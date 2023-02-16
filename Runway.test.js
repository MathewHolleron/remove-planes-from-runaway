const Runway = require("./Runway")

// Write a test suite for the `Runway` class
// 5. Write a test case that checks that the maximum number of planes allowed on the `Runway` is 100
// 6. Write a test case that checks you can initialize a `Runway` class with a name
// 7. Write a test case that validates you can add planes to the `Runway`
// 8. Write a test case that validates that you receive an error message if you try to add planes to the Runway after it’s at max capacity.
// 9. Write a test case that validates you can remove planes from the `Runway`
// 10. Write a test case that validates that you receive an error message if you try to remove planes from the Runway when there are no planes currently in the `Runway`

describe("runway class tests", () => {
    test('should allow a maximum of 100 planes on the runway', () => {
        const runway = new Runway('Test Runway');
        for (let i = 0; i < 100; i++) {
          runway.add(`Plane ${i}`);
        }
        expect(() => runway.add('Plane 101')).toThrowError('runways at full capacity!');
      });
      test('should initialize a Runway class with a name', () => {
        const runway1 = new Runway('Test Runway');
        expect(runway1.name).toBe('Test Runway');
      });
    
      // Test case 7
      test('should be able to add planes to the runway', () => {
        const runway2 = new Runway('Test Runway');
        runway2.add('Plane 1');
        expect(runway2.planes.length).toBe(1);
        expect(runway2.planes[0]).toBe('Plane 1');
      });
    
      // Test case 8
      test('should throw an error message when adding planes to a full runway', () => {
        const runway3 = new Runway('Test Runway');
        for (let i = 0; i < 100; i++) {
          runway3.add(`Plane ${i}`);
        }
        expect(() => runway3.add('Plane 101')).toThrowError('runways at full capacity!');
      });
    
      // Test case 9
      test('should be able to remove planes from the runway', () => {
        const runway4 = new Runway('Test Runway');
        runway4.add('Plane 1');
        runway4.remove('Plane 1');
        expect(runway4.planes.length).toBe(0);
      });
    
      // Test case 10
      test('should throw an error message when removing planes from an empty runway', () => {
        const runway5 = new Runway('Test Runway');
        expect(() => runway5.remove('Plane 1')).toThrowError('no planes currently in the Runway');
      });
    });