import {TestBed, ComponentFixture} from '@angular/core/testing';
import { POCTestComponent } from 'app/POCs/string_interpolation/POCTestComponent.component';
// this class is used only for integration testing.
/*
1.    TestBed.configureTestingModule
        - this method takes a metadata obj. similar to what we provide to @NgModule.
        - this is how we create a dynamic testing module 

2.    TestBed.createComponent()
        - creates instance of this component. 
        - argument to this is the type of our component.
        - in our case, POCTestComponent class's type is POCTestComponent
       3. - it returns a component fixture. ComponentFixture is a wrapper around our component
            > with ComponentFixture, we can get access to both the component n its template 
            > import {ComponentFixture} from '@angular/core/testing'

4.    declare variables to capture instances
        - let component : POCTestComponent ;
        - let fixture : ComponentFixture<POCTestComponent> ; 

5.
    fixture.nativeElement    //returns <html> which is root of our template
    fixture.debugElement     //wrapper around nativeElement. gives us useful methods to query the DOM. 
    - using fixture, we can also run change detection manually.

*/

let component: POCTestComponent;
let fixture: ComponentFixture<POCTestComponent> ; // will be assigned o/p of createComponent

// 1.
TestBed.configureTestingModule({
    declarations: [POCTestComponent] 
});

// 2, 3, 4
fixture = TestBed.createComponent(POCTestComponent);
component = fixture.componentInstance; 
